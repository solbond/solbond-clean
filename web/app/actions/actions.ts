import { createServerFn } from "@tanstack/start"
import { create, get } from "ronin"

export const $createUser = createServerFn({
  method: "POST",
})
  .validator((data: { email: string }) => data)
  .handler(async (ctx) => {
    const { email } = ctx.data
    return await create.user.with({
      email,
    })
  })
