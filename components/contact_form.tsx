import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "./icons";
import { CheckCircleIcon } from "lucide-react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(data) {
    axios
      .post("https://eonc5oqjzkckuua.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(
          `Gracias por tu contacto! Chequeá tu correo para continuar la charla 😊`
        );
        setSubmitted(true);
      })
      .catch((e) => console.error(e));
  }

  if (submitted) {
    return (
      <div className="flex items-center space-x-2 bg-green-100 p-2 rounded-md">
        <CheckCircleIcon className="h-6 w-6 text-green-600" />
        <p className="text-green-800">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full max-w-sm justify-content-start space-x-2">
        <Input {...register("email")} defaultValue="Tu email"></Input>
        <Button type="submit" role="submit">
          {isSubmitting ? "Submitting" : "Enviar"}
        </Button>
      </div>
    </form>
  );
}
