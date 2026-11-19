import { useState } from "react"

function ContactForm(){
    const [data, setData] = useState({
        fullName: "",
        email:""
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setData({
        fullName: "",
        email:""
    })
        console.log(data)
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 w-[150px]">
            <input 
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="border-1"
                value={data.fullName}
                onChange={handleChange}
            />
             <input 
                type="email"
                name="email"
                placeholder="Email"
                className="border-1"
                value={data.email}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm