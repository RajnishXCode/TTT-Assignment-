import React from 'react'
import data from "../../Data.json";

export default function Profile({like}) {
  return (
    <div className="profile-sec">
        <div className="pro-up">
          <img src={data.User.userImg} alt="user" />
          <div className="pro-up-text">
            <div className="name-sec">
              <b>{data.User.name}</b>
              <img src={data.images.diamnond} alt="diamond" />
              <img src={data.images.greenTik} alt="diamond" />
            </div>
            <div className="follow-data">
              <div className="follow">
                <b>{data.User.followers}</b>
                <span>Followers</span>
              </div>

              <div className="follow">
                <b>{data.User.following}</b>
                <span>Following</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pro-down">
          <span>{data.User.description}</span> <br />
          <span1>{data.User.website}</span1>
          <div className="icon-state">
            {/* <i class="fa-regular fa-star" style={{background: "#15a3c7"}} /> */}
            <img src={data.images.star} alt="star" />
            {data.User.star}
            <i class="fa-regular fa-thumbs-up" style={{background:"#ffbf35"}}/>
            {/* <img src={data.images.thumb} alt="star" /> */}
            {like}
            {/* <i class="fa-regular fa-eye" style={{background: "#999999"}}/> */}
            <img src={data.images.eye} alt="star" />
            {data.User.eye}
            {/* <i class="fa-regular fa-heart" style={{background: "#c31f48"}}/> */}
            <img src={data.images.heart} alt="star" />
            {data.User.heart}
          </div>
        </div>
      </div>
  )
}
