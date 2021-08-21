// libraries
import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"

//components
import SocialMedia from "../components/social-media"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

// schema
const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required().min(10),
})
const ContactForm = ({ data }) => {
  const { author }: { author: string } = data.site.siteMetadata
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(schema) })

  React.useEffect(() => {
    // reset the form when submited
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  const onSubmit = async (data: any) => {
    // send the form data to the specify email
    // user specific id are needed.
    try {
      await axios.post(
        "https://royer-adames-email-sender.herokuapp.com/email/",
        data
      )
    } catch (error) {
      console.log("User send form id are not setup yet.")
      console.log("The data was: ")
      console.log({ data })
    }
  }

  return (
    <Layout>
      <SEO
        title="Contact Me"
        description={`Use the contact form to send an email to ${author}.`}
      />
      <main className="website__pages contact-page">
        <article className="contact-message">
          <div className="horizontal-line contact-message__horizontal-line " />
          <h2 className="title contact-message__title">Get in Touch</h2>
          <p className="message-s contact-message__message">
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <SocialMedia page="contact-message" />
        </article>
        <article className="contact-form">
          <div className="horizontal-line contact-form__horizontal-line " />
          <h1 className="title contact-form__title">Contact Me</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="contact-form__form"
          >
            {/*
              Name
              email
              message
              submit
              */}
            {/* Name */}
            <div className="form-elements">
              <label
                htmlFor="name"
                className="form-elements__label contact-form__label"
              >
                Name
              </label>
              <input
                {...register("name")}
                className={`form-elements__input contact-form__name ${
                  errors.name ? "form-elements__error-input" : ""
                }`}
                placeholder="Jane Appleseed"
              />
              <p className="form-elements__error-message">
                {errors.name?.message}
              </p>
            </div>
            {/* email */}
            <div className="form-elements">
              <label
                htmlFor="email"
                className="form-elements__label contact-form__label contact-form__label-email"
              >
                Email
              </label>
              <input
                {...register("email")}
                className={`form-elements__input contact-form__email ${
                  errors.email ? "form-elements__error-input" : ""
                }`}
                placeholder="email@example.com"
              />
              <p className="form-elements__error-message ">
                {errors.email?.message}
              </p>
            </div>
            {/* message */}
            <div className="form-elements">
              <label
                htmlFor="message"
                className={`contact-form__input-label contact-form__label-message `}
              >
                Message
              </label>
              <input
                {...register("message")}
                className={`form-elements__input  form-elements__input-message ${
                  errors.message ? "form-elements__error-input" : ""
                }`}
                placeholder="How can I help?"
              />
              <p className="form-elements__error-message ">
                {errors.message?.message}
              </p>
            </div>
            {/* submit */}
            <button
              type="submit"
              className=" button button-primary-normal button__text form-elements__submit"
            >
              Send Message
            </button>
          </form>
        </article>
      </main>
    </Layout>
  )
}

export default ContactForm

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`
