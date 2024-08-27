<template>
    <div class="container">
        <div class="contact-container">
                    <form action="POST" ref="form" @submit.prevent="sendEmail">
                        <div class="name-fields">
                            <div class="field">
                                <input 
                                    type="text" 
                                    v-model="firstName" 
                                    placeholder="First Name" />
                            </div>
                            <div class="field">
                                <input 
                                    type="text" 
                                    v-model="subject"
                                    placeholder="Subject of message"
                                />
                            </div>
                        </div>
        
                        <div class="email-field field">
                            <input 
                                type="email" 
                                v-model="email"  
                                placeholder="Enter your Email"
                            />
                        </div>
        
                        <div class="field">
                            <textarea
                                type="textarea"
                                v-model="message"
                                placeholder="Enter Message"
                            />
                        </div>
                        <div class="submitbutton field">
                            <button type="submit" value="send">SUBMIT</button>
                        </div>
        
                    </form>
        </div>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';

    export default{
        data() {
            return {
                firstName: '',
                subject: '',
                email: '',
                message: '',
            };
        },
        methods: {
            sendEmail() {
                const templateParams = {
                    to_name: this.firstName,
                    from_name: this.email,
                    subject: this.subject,
                    message: this.message,
                };

                console.log(templateParams)

                emailjs
                .sendForm('service_7fq8172', 'template_eo3d7z9', templateParams, {
                    publicKey: 'FcLpyFVMcEm-ZbcwR'
                }).then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
            },
        },
        mounted() {
        // Inisialisasi EmailJS
         emailjs.init('FcLpyFVMcEm-ZbcwR');
        }
    }
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    padding-top: 10rem;
}
    .contact-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
            height: 70vh;
            width: 60%;
            margin: 10px auto;
            margin-bottom: 10rem;
            padding: 10%;
            color: black;
        }
        .field{
            margin: 10px 0;
        }
        input,
        textarea{
            height: 50px;
            width: 100%;
            margin: 20px;
            border-top: none;
            border-right: none;
            border-left: none;
            outline: none;
        }
        textarea{
            height: 100px;
            border-bottom: 2px solid rgb(133, 133, 133);
        }
        .submitbutton button{
            height: 50px;
            width: 200px;
            margin: 0 auto;
            text-align: center;
            font-weight: 300;
            border-radius: 30px;
            border: 2px solid rgb(133, 133, 133);
            color: #000;
            font-weight: 600;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .submitbutton button:hover{
            background-color: #7C00FE;
            border: none;
            color: #fff;
            font-weight: 600;
            transition: .3s all ease;
        }
        .contact-title{
            text-align: center;
        }
</style>