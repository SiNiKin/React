import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "젤리",
        comment: "뭐 시발"
    },
    {
        name: "블리",
        comment: "띰띰해"
    },
    {
        name: "처음",
        comment: "개추"
    }
]

function CommentList(props) {
    return (
        <div>
            {/* <Comment name={"젤리"} comment={"뭐 시발 "}/>
            <Comment name={"블리"} comment={"띰띰해"}/> */}

            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;