import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <main><h1 className='public_headline'>Organize, Collaborate, and Empower Your Workflow with MyNote!</h1>
            <p className='public_detail-line'>Streamline your note-taking process with NoteCategorize, the ultimate note-making website that allows you to effortlessly categorize and manage your notes based on your role - admin, manager, or employee. Stay organized, collaborate seamlessly, and boost productivity with NoteCategorize!</p>
            </main>
            <footer className='employee-login'>
                <Link to="/login" >
                    Employee Login
                </Link>
            </footer>
        </section>

    )
    return content
}
export default Public