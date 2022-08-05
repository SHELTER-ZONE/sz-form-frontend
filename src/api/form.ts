import { api, AxiosInstanceResponse } from './instance'

export const GetFormList = async ({
  last,
  limit,
}: {
  last?: string
  limit?: number
}) => {
  return await api({
    method: 'GET',
    url: `/forms`,
    params: {
      last,
      limit,
    },
  })
}

export const GetFormCount = async () => {
  return await api({
    method: 'GET',
    url: `/forms/count`,
  })
}

export const FindForm = async ({ formKey }: { formKey: string }) => {
  return await api({
    method: 'GET',
    url: `/forms/${formKey}`,
  })
}

export const SubmitForm = async ({
  formKey,
  content,
  imgs,
}: // userId,
{
  formKey: string
  content: string
  imgs: string[]
  // userId?: string
}) => {
  return await api({
    method: 'POST',
    url: `/forms/${formKey}`,
    data: {
      content,
      imgs,
      // userId,
    },
  })
}
