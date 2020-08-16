import React from 'react'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

class Contact extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("coming")
    }

    handleChange = (e) => {
        const name = e.target.name
        this.setState({[name]:e.target.value})

    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='password'
                    required
                 />
                    <CustomButton type='submit'> Sign in </CustomButton>
                </form>
            </div>
        )
    }
}

export default Contact;