import styles from "./ContactForm.module.css";
import useInput from "./useInput";
import Input from "./Input";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
    reset:emailReset,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: NameisEmpty,
    reset:nameReset,
  } = useInput("", isNotEmpty);

  const {
    value: messageValue,
    handleInputChange: handleMessageChange,
    handleInputBlur: handleMessageBlur,
    hasError: MessageisEmpty,
    reset:messageReset,
  } = useInput("", isNotEmpty);

  const [result, setResult] = useState("");
  
  useEffect(() => {
    let timer;
    if (result) {
      timer = setTimeout(() => {
        setResult("");
      }, 5000);
    }
    
    return () => clearTimeout(timer); 
  }, [result]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || NameisEmpty || MessageisEmpty) {
      return;
    }

    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", `${import.meta.env.VITE_FORM_API_KEY}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
        setResult("Form Submitted Successfully");
        handleReset();
    } else {
      setResult(data.message);
    }
  }

  function handleReset(){
    emailReset();
    nameReset();
    messageReset();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.Form}>
      <h2>Send me a Message</h2>
      <Input
        label="FullName"
        id="name"
        type="text"
        name="name"
        onChange={handleNameChange}
        value={nameValue}
        onBlur={handleNameBlur}
        placeholder="FullName"
        error={
          NameisEmpty && (
            <span className={styles.error}>Please enter your name</span>
          )
        }
      />
      <Input
        label="Email"
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleEmailChange}
        value={emailValue}
        onBlur={handleEmailBlur}
        error={
          emailHasError && (
            <span className={styles.error}>Please enter a valid email</span>
          )
        }
      />
      <Input
        label="Message"
        id="message"
        type="text"
        name="message"
        placeholder="Message"
        isMessage
        onChange={handleMessageChange}
        value={messageValue}
        onBlur={handleMessageBlur}
        error={
          MessageisEmpty && (
            <span className={styles.error}>Please enter a message</span>
          )
        }
      />
      <button type="submit" className={styles.submitButton}>
        Send
      </button>
      {result && (
        <div
          className={`${styles.resultMessage} ${
            result.includes("Error") ? styles.error : ""
          }`}
        >
          {result}
        </div>
      )}
    </form>
  );
}

function isEmail(value) {
  return value.includes("@");
}

function isNotEmpty(value) {
  return value.trim() !== "";
}
