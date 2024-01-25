

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
        setSuccessMessage(`Gracias! Continuamos por correo`)
        setSubmitted(true)
      })
      .catch((e) => console.error(e))
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center space-y-2 rounded-md bg-green-100 p-4">
        <CheckCircleIcon className="h-16 w-16 text-green-600" />
        <p className="text-center text-lg text-green-800">{successMessage}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="justify-content-start flex relative bottom-9 right-6 w-full max-w-sm space-x-2 bg-transparent">
        <Input
          {...register("nombre")}
          defaultValue="Nombre"
          className="leading-normal"
        ></Input>
        <Input
          {...register("email")}
          defaultValue="Email"
          className=""
        ></Input>
        <Button type="submit" role="submit" className="">
          {isSubmitting ? "Submitting" : "Enviar"}
        </Button>
      </div>
    </form>
  )
}
