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


    return (
        <Fragment>

            <section className="mb-20" id="tasks">

                <div className="container">
                    {AddTaskShowModal && <AddTaskModal />}


                    {/* Searchbox */}
                    <div className="p-2 flex justify-end">
                        <Searchbox />
                    </div>

                    <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">

                        {/* TaskActions */}
                        <TaskActions handleAddTask={() => setAddTaskShowModal(true)} />

                        {/* TaskList */}
                        <TaskList tasks={tasks} />

                    </div>
                </div>
            </section>

        </Fragment>
    )
}
export default TaskBoard