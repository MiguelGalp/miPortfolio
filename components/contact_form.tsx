import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
          `Thanks for signing up! Check your inbox for updates 😊`
        );
        setSubmitted(true);
      })
      .catch((e) => console.error(e));
  }

  if (submitted) {
    return <p>{successMessage}</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input {...register("email")} defaultValue="me@gmail.com"></Input>
        <Button type="submit" role="submit">
          {isSubmitting ? "Submitting" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
