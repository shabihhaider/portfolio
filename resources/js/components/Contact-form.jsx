import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import SocialMediaLinks from '@/components/Social-media-links'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        const newErrors = {}
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            // Handle form submission here
            console.log('Form submitted:', formData)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input 
                    label="Name" 
                    name="name" 
                    type="text" 
                    placeholder="Enter your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                />

                <Input 
                    label="Email" 
                    name="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                
                <Textarea 
                    label="Message" 
                    name="message" 
                    placeholder="Write your message..." 
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                />

                <button 
                    type="submit"
                    className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                    Send Message
                </button>
            </form>

            <SocialMediaLinks />
        </>
    )
}

export default ContactForm