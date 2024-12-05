import { createServerFn } from "@tanstack/start"
import { create, get } from "ronin"

export const $createUser = createServerFn({
  method: "POST",
})
  .validator((data: { email: string }) => {
    if (!data.email) {
      throw new Error("Email is required")
    }
    return data
  })
  .handler(async (ctx) => {
    const { email } = ctx.data
    console.log("Creating user with email:", email)

    try {
      const user = await create.user.with({
        email: email,
      })
      return user
    } catch (error) {
      throw new Error("Failed to create user")
    }
  })
