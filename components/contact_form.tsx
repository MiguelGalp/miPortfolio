import React, { useState } from "react"
import axios from "axios"
import { CheckCircleIcon } from "lucide-react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "./icons"

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm()
  const [successMessage, setSuccessMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(data) {
    axios
      .post("https://eonc5oqjzkckuua.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(
          `Gracias! Continuamos por correo`
        )
        setSubmitted(true)
      })
      .catch((e) => console.error(e))
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center space-y-2 rounded-md bg-green-100 p-4">
        <CheckCircleIcon className="h-16 w-16 text-green-600" />
        <p className="text-green-800 text-lg text-center">{successMessage}</p>
      </div>
    )    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="justify-content-start flex w-full max-w-sm space-x-2">
        <Input {...register("nombre")} defaultValue="Tu nombre"></Input>
        <Input {...register("email")} defaultValue="Tu email"></Input>
        <Button type="submit" role="submit">
          {isSubmitting ? "Submitting" : "Enviar"}
        </Button>
      </div>
    </form>
  )
}
