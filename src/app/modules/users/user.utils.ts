import { User } from './user.model'

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastUser?.id
}

//it will generate a new user id if there is no id. if there is id it will return the last user id
export const generateUserId = async () => {
  const currentUserId =
    (await findLastUserId()) || (0).toString().padStart(5, '0')

  //incrementing the id
  const incrementedId = (parseInt(currentUserId) + 1)
    .toString()
    .padStart(5, '0')
  return incrementedId
}
