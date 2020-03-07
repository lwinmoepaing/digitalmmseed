/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
/* eslint-disable no-shadow */
import { useState, useEffect } from 'react'
import EditorLoading from '../Editor/EditorLoading'
import BlogImageContainer from './BlogImageContainer'
import BlogContainer from './BlogContainer'
import EditQuilEditor from '../Editor/EditQuilEditor'
import { BASE_API_URL } from '../../../../config'

/* eslint-disable react/prop-types */
const Blog = ({ id, authInfo, token }) => {
  const [blog, setBlog] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [isEdit, setIsEdit] = useState(false)

  const fetchData = async () => {
    if (blog === null) {
      const url = `${BASE_API_URL}/api/v1/blog/${id}`
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })
        if (!res.ok) {
          throw new Error(res)
        }
        const { data } = await res.json()
        const Console = console
        Console.log('Get Data', data)
        setLoading(false)
        setBlog(data)
      } catch (e) {
        setLoading(false)
        setBlog(null)
      }
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const _setParentUpdate = (data) => {
    setBlog((blog) => ({
      ...blog,
      ...data,
    }))
    setIsEdit(false)
  }

  return (
    <div>
      { isLoading }
      { isLoading === true && <div className="Container"><EditorLoading /></div>}
      { isLoading === false && blog !== null && <BlogImageContainer blog={blog} />}
      { isLoading === false && blog !== null && isEdit === false && (
      <BlogContainer
        onChangeEdit={() => { setIsEdit(true) }}
        blog={blog}
        authInfo={authInfo}
        isLoading={isLoading}
      />
      )}

      { isLoading === false && blog !== null && isEdit === true && (
      <EditQuilEditor
        id={id}
        token={token}
        setParentUpdate={_setParentUpdate}
        blog={blog}
        cancel={() => setIsEdit(false)}
      />
      ) }
      <style jsx>
        {`
					.Container {
						background: #fff;
						border-radius: 1rem;
						padding: 1rem;
					}
				`}
      </style>
    </div>
  )
}

export default Blog
