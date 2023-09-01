import "../styles/form.css"
import { url_backend } from '../url'
import { useRef, useEffect } from 'react'

export default function Form() {

    useEffect(() => {
        // const verify = async () => {
        //     const data = await fetch("")
        // }
    
      return () => {
        
      }
    }, [])
    

    const $form = useRef<HTMLFormElement>(null);
    const $formSign = useRef<HTMLFormElement>(null);

    const sentDataLogin = async () => {
        let dataform;
        if ($form.current) {
           dataform = new FormData($form.current); 
        }

        const email = dataform?.get("email");
        const password = dataform?.get("password")

        const body = {
            email, 
            password
        }

       const statusR = await fetch(`${url_backend}/api/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body),
            credentials: "include"

        })
        console.log(statusR.status)
        if (statusR.status === 200) {
            window.location.href += "dashboard"
            
        }
    }

    const sentDataSignin = async () => {
        let dataform;
        if ($formSign.current) {
            dataform = new FormData($formSign.current);
        }

        const username = dataform?.get("username")
        const email = dataform?.get("email")
        const password = dataform?.get("password")

        const body = {
            username, 
            email, 
            password
        }
        console.log(body)

        const statusR = await fetch(`${url_backend}/api/signIn`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body),
            credentials: "include"
        })

        console.log(statusR.status)
        if(statusR.status === 201) {
            window.location.href += "dashboard"
        }
    }

  return(
    <body className='body-login'>
        
    <div className="main">
		<input type="checkbox" id="chk" aria-hidden="true" />
			<div className="login">
				<form ref={$form} className="form-login" onSubmit={ (event) => event.preventDefault() }>
					<label className='label' htmlFor="chk" aria-hidden="true">Login</label>
					<input
						className="input-email input"
						type="email"
						name="email"
						placeholder="Email"
                        required={true}
					/>
					<input
						className="input-password input"
						type="password"
						name="password"
						placeholder="Password"
                        required={true}
					/>
					<button className="btn-login button" onClick={sentDataLogin}>Login</button>
				</form>
           </div> 
           
			<div className="signup">
				<form ref={$formSign} onSubmit={(event) => event.preventDefault() }>
					<label className='label' htmlFor="chk" aria-hidden="true">Sign up</label>
					<input
                        className='input'
						type="text"
						name="username"
						placeholder="User name"
						required={true}
					/>
					<input
                        className='input'
						type="email"
						name="email"
						placeholder="Email"
						required={true}
					/>
					<input
                        className='input'
						type="password"
						name="password"
						placeholder="Password"
						required={true}
					/>
					<button className='button' onClick={sentDataSignin}>Registrate</button>
				</form>
			</div>
    </div>
    </body>
  );
}
