import React from "react"
import s from './Profile.module.css'


const Profile = () => {
  return (
    <div className={s.Content}>

      <div>
        <img/>
      </div>
      <div>
        <img />
        <div className={s.Content}>
          Discription
        </div>
      </div>
      <div className={s.Item}>My Post</div>
      <div className={s.Item}>New Post
        <div className={s.Item}>Post 1</div>
        <div className={s.Item}>Post </div>
      </div>
    </div>
  )
}

export default Profile
