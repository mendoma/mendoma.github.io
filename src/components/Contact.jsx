import React from 'react'

const Contact = () => {
	return (
		<div className="container">
            <h5>Contact Info</h5>
            <div className="divider"></div>
            <br />
            <div className="row section center">
                <div className="col s12 m6 l4">
                    <p><a href="mailto:manny17t@gmail.com">manny17t@gmail.com</a></p>
                </div>
                <div className="col s12 m6 l4">
                    <p><a href="/#">760.224.9234</a></p>
                </div>
                <div className="col s12 m6 l4">
                    <p><a href="../assets/files/web_developer_resume_sample.docx">Resume</a></p>
                </div>
            </div>
            <br />
            <h5>Send me a message</h5>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">Full Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" />
                            <label htmlFor="textarea1">Message</label>
                        </div>
                    </div>
                    <button className="waves-effect waves-light btn hoverable blue darken-3" type="submit" name="action">Submit
                    </button>
                </form>
            </div>
        </div>
	)
}

export default Contact
