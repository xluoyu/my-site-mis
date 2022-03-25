import Request from './request'

export const GetTodoList = () => {
  return Request({
    url: '/todo',
    method: 'GET',
  })
}

export const GetTodoOne = (data: {id: Number}) => {
  return Request({
    url: `/todo/${data.id}`,
    method: 'GET',
  })
}

export const CreateTodo = (data: {
  title: String,
  content?: String
}) => {
  return Request({
    url: '/todo',
    method: 'POST',
    data
  })
}

export const PatchTodo = (data: {
  id: Number | null,
  title: String,
  content?: String
}) => {
  return Request({
    url: `/todo/${data.id}`,
    method: 'patch',
    data
  })
}

export const DeleteTodo = (data: {id: Number}) => {
  return Request({
    url: `/todo/${data.id}`,
    method: 'delete',
  })
}