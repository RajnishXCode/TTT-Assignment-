import React from 'react'
import '../../App.css'
export default function Post({like, morelike}) {
  return (
    <div className="post-sec">

        <div className="post">
          <div className="title-box">
            <h3>A Changing World Order</h3>
            <button onClick={() => morelike(like + 1)} >
            <i class="fa-regular fa-thumbs-up" style={{background:"#ffbf35"}}/>
            </button>
          </div>
          <p>
            The world is changing at a feverish pace. Friends, colleagues and
            everyone engaged in knowledge work are beginning to sense this,
            including ...
          </p>
          <div className='diva'>
            <span>
              <t style={{color: "#15a3c7"}} >musing</t> by anujgosalia</span>
            <span>August 2 ● 2 mins Read ● 102 Views</span>
          </div>
        </div>

        <hr />

        <div className="post">
          
          <div className="title-box">
          <h3>Indian v/s Australia</h3>
            <button  onClick={() => morelike(like + 1)}>
            <i class="fa-regular fa-thumbs-up" style={{background:"#ffbf35"}}/>
            </button>
          </div>
          
          <p>
            Think about it - this cricket series was akin to therapy. <br />{" "}
            <br /> Laying our childhood trauma up top, working with it slowly
            and surely over two m...
          </p>
          <div className='diva'>
            <span>
              <t style={{color: "#15a3c7"}} >thoughts</t> by anujgosalia</span>
            <span>January 21 ● 1 mins Read ● 156 Views</span>
          </div>
        </div>

        <hr />

        <div className="post">
          <div className="title-box">
          <h3>Write To Build</h3>
            <button  onClick={() => morelike(like + 1)} >
            <i class="fa-regular fa-thumbs-up" style={{background:"#ffbf35"}}/>
            </button>
          </div>
          <p>Writing is the first step to create:</p>
          <ul>
            <li>- stories</li>
            <li>- products</li>
            <li>- companies</li>
          </ul>
          <div className='diva'>
            <span><t style={{color: "#15a3c7"}} >thoughts</t> by anujgosalia</span>
            <span>November 18 ● 1 mins Read ● 228 Views</span>
          </div>
        </div>

        <hr />

        <br />

        

      </div>
  )
}
