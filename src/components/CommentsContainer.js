import React from 'react'

const CommentData = [
  {
    Name: "Bandana Roy",
    Text: "lorem ipsum dolor sit amet, consectetur adip",
    Replies: []
  },
  {
    Name: "Bandana Roy",
    Text: "lorem ipsum dolor sit amet, consectetur adip",
    Replies: [
      {
        Name: "Bandana Roy",
        Text: "lorem ipsum dolor sit amet, consectetur adip",
        Replies: [
          {
            Name: "Bandana Roy",
            Text: "lorem ipsum dolor sit amet, consectetur adip",
            Replies: [
              {
                Name: "Bandana Roy",
                Text: "lorem ipsum dolor sit amet, consectetur adip",
                Replies: []
              },
              {
                Name: "Bandana Roy",
                Text: "lorem ipsum dolor sit amet, consectetur adip",
                Replies: []
              },
            ]
          },
          {
            Name: "Bandana Roy",
            Text: "lorem ipsum dolor sit amet, consectetur adip",
            Replies: []
          },
        ]
      },
      {
        Name: "Bandana Roy",
        Text: "lorem ipsum dolor sit amet, consectetur adip",
        Replies: []
      },
      {
        Name: "Bandana Roy",
        Text: "lorem ipsum dolor sit amet, consectetur adip",
        Replies: []
      },
      {
        Name: "Bandana Roy",
        Text: "lorem ipsum dolor sit amet, consectetur adip",
        Replies: []
      },
    ]
  },
  {
    Name: "Bandana Roy",
    Text: "lorem ipsum dolor sit amet, consectetur adip",
    Replies: []
  },
  {
    Name: "Bandana Roy",
    Text: "lorem ipsum dolor sit amet, consectetur adip",
    Replies: []
  },
  {
    Name: "Bandana Roy",
    Text: "lorem ipsum dolor sit amet, consectetur adip",
    Replies: []
  },

]

const Comment = ({ data }) => {
  const { Name, Text } = data
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
      <img className='w-12 h-12'
        alt='user' src='https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg' />
      <div className='px-3'>
        <p className='font-bold'>{Name}</p>
        <p>{Text}</p>
      </div>
    </div>
  )
}

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className='pl-5 border border-l-black ml-5'>
        <CommentList comments = {comment.Replies}/>
      </div>
    </div>

  ))


}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentList comments={CommentData} />
    </div>
  )
}

export default CommentsContainer;