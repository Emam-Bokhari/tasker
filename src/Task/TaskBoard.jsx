import { Fragment, useState } from "react"
import Searchbox from "./Searchbox"
import TaskActions from "./TaskActions"
import TaskList from "./TaskList"
import AddTaskModal from "./AddTaskModal"

const TaskBoard = () => {
    const defaultTask = {
        "id": crypto.randomUUID(),
        "title": "Integration API",
        "description": "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
        "tags": ['Web', 'Python', 'Api'],
        "priority": "High",
        "isFavourite": true
    }

    const [tasks, setTasks] = useState([defaultTask])

    const [AddTaskShowModal, setAddTaskShowModal] = useState(false)

    const [taskToUpdate, setTaskToUpdate] = useState(null)

    // add new task
    function handleAddNewTask(newTask, isAdd) {
        // console.log(task)
        if (isAdd) {
            setTasks([
                ...tasks,
                newTask
            ])
        } else {
            setTasks(
                tasks.map((task) => {
                    if (task.id === newTask.id) {
                        return newTask
                    }
                    return task
                })
            )
        }

        setAddTaskShowModal(false)
    }

    // edit task
    function handleEditTask(task) {
        // console.log(task)
        setTaskToUpdate(task)
        setAddTaskShowModal(true)
    }

    // cancel
    function handleCancel() {
        setAddTaskShowModal(false)
        setTaskToUpdate(null)

    }

    // delete task
    function handleDeleteTask(taskId) {
        const tasksAfterDelete = tasks.filter(task => task.id !== taskId)
        setTasks(tasksAfterDelete)
    }

    // delete all tasks
    function handleDeleteAll() {
        tasks.length = 0
        // console.log(tasks)
        setTasks([...tasks])
    }




    return (
        <Fragment>

            <section className="mb-20" id="tasks">

                <div className="container">
                    {AddTaskShowModal && <AddTaskModal
                        handleCancel={handleCancel}
                        handleAddNewTask={handleAddNewTask}
                        taskToUpdate={taskToUpdate}
                    />}


                    {/* Searchbox */}
                    <div className="p-2 flex justify-end">
                        <Searchbox />
                    </div>

                    <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">

                        {/* TaskActions */}
                        <TaskActions
                            handleDeleteAll={handleDeleteAll}
                            handleAddTaskModal={() => setAddTaskShowModal(true)} />

                        {/* TaskList */}
                        <TaskList
                            handleDeleteTask={handleDeleteTask}
                            tasks={tasks} handleEditTask={handleEditTask} />

                    </div>
                </div>
            </section>

        </Fragment>
    )
}
export default TaskBoard