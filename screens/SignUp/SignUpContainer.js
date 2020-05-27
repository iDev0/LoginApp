import React, {useState} from 'react';
import SignUpPresenter from "./SignUpPresenter";
import utils from '../../utils'
import api from '../../api'

export default ({navigation : {navigate}}) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const isFormValid = () => {
        if (firstName === '' || lastName === '' || email === '' || password === '') {
            alert('공백을 채워주세요.')
            return false
        }

        console.log('=================')
        console.log(email)
        console.log('=================')

        if (!utils.isEmail(email)) {
            alert('올바른 이메일을 넣어주세요.')
            return false
        }

        return true
    }

    const handleSubmit = async() => {
        if (!isFormValid()) {
            return
        }
        setLoading(true)

        try {
            const {status} = await api.createAccount({
                first_name : firstName,
                last_name : lastName,
                email,
                username : email,
                password
            })

            if (status === 200) {
                alert('정상적으로 계정이 생성되었습니다.')
                navigate('SignIn', {email, password})
            }

        } catch (e) {
            alert(e.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <SignUpPresenter
            submit={handleSubmit}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setPassword={setPassword}
            firstName={firstName}
            lastName={lastName}
            email={email}
            password={password}
            loading={loading}
        />
    )

}


//
// const SignUpContainer = ({navigation}) => {
//
//
//
//
//     navigation.setOptions({
//         headerLeft : () => (<DismissButton />),
//         title : '회원가입'
//     })
//
//     const signUpCommand = () => {
//
//     }
//
//     const onChanged = text => {
//
//     }
//
//
//     return (
//         <SignUpPresenter
//             onChange={onChanged}
//         />
//     )
// }
//
// export default SignUpContainer;
