import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import firebase from "../../firebase/firebase";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const PostView = props => {
  const [modal, setModal] = useState(false);
  const [post, setPost] = useState({});
  const [postTime, setPostTime] = useState({});
  const [title, setTitle] = useState(post.title);
  const [category, setCategory] = useState(post.category);
  const [content, setContent] = useState(post.desc);

  const data = props.location.state.b;
  const db = firebase.firestore();
  const dbRef = db.collection("blog").doc(data.id);

  const onToggle = () => {
    setModal(!modal === true);
  };

  useEffect(() => {
    const postData = dbRef.onSnapshot(doc => {
      if (doc.exists) {
        const post = {
          id: doc.id,
          ...doc.data()
        };
        setPost(post);
        const postTime = {
          ...doc.data().createAt
        };
        setPostTime(postTime);
      }
    });
    return postData;
  }, [dbRef]);

  const onEdit = e => {
    e.preventDefault();
    console.log(`${title}\n ${category}\n${content}`);
    dbRef
      .update({
        title: title,
        category: category,
        desc: content,
        updateAt: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(res => {
        console.log("Update Success", res);
        alert("Update Success");
        onToggle();
      })
      .catch(error => {
        console.log("Fail", error.message);
        alert("Fail");
      });
  };

  const onRemove = () => {
    dbRef
      .delete()
      .then(res => {
        console.log("Remove Success", res);
        alert("Remove Success");
        window.location.href = "/blog";
      })
      .catch(error => {
        console.log("Fail", error.message);
        alert(error.message);
      });
  };

  return (
    <Styles>
      <PostMain>
        <section>
          <h6>
            <p>category</p>
            <input name="category" defaultValue={post.category} readOnly />
          </h6>
          <h6>
            <p>제목</p>
            <input name="title" defaultValue={post.title} readOnly />
          </h6>
          <h6>
            <p>작성자</p>
            <input name="author" defaultValue={post.author} readOnly />
          </h6>
          <h6>
            <p>작성일자</p>
            <p className="createAt">
              {new Date(postTime.seconds * 1000).toLocaleString("ko")}
            </p>
          </h6>
        </section>
        <section className="postText">
          <textarea type="textarea" defaultValue={post.desc} readOnly />
        </section>
        <PostBtn>
          <button className="btn btn-outline-danger" onClick={onRemove}>
            글 삭제
          </button>
          <button className="btn btn-outline-warning" onClick={onToggle}>
            글 수정
          </button>
          <Modal isOpen={modal} toggle={onToggle}>
            <ModalBody>
              <ModalHeader toggle={onToggle}>{post.title}</ModalHeader>
              <EditForm>
                <label className="title">
                  <p>제목</p>
                  <h5>
                    <input
                      className="titleInput"
                      name="title"
                      defaultValue={post.title}
                      onChange={e => setTitle(e.target.value)}
                    />
                  </h5>
                </label>
                <label>
                  <p>category </p>
                  <select
                    name="category"
                    type="text"
                    onChange={e => setCategory(e.target.value)}
                  >
                    <option value="일상">일상</option>
                    <option value="잡소리">잡소리</option>
                  </select>
                </label>
                <label>
                  <p>작성자</p>
                  <input name="author" defaultValue={post.author} />
                </label>
                <textarea
                  name="postContent"
                  defaultValue={post.desc}
                  onChange={e => setContent(e.target.value)}
                />
              </EditForm>
            </ModalBody>
            <ModalFooter>
              <input type="submit" value="글 수정" onClick={onEdit} />
              <button className="btn btn-outline-secondary" onClick={onToggle}>
                취소
              </button>
            </ModalFooter>
          </Modal>
          <Link to="/blog">
            <button className="btn btn-outline-secondary">글 목록</button>
          </Link>
        </PostBtn>
      </PostMain>
    </Styles>
  );
};

const Styles = styled.div`
  margin-top: 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  & textarea {
    padding: 5px;
    width: 100%;
    height: 500px;
  }
  & .title {
    margin-top: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    letter-spacing: 3px;
    & h5 {
      margin: 0;
      width: 80%;
      display: flex;
      justify-content: center;
    }
    & .titleInput {
      width: 100%;
    }
  }
  & label {
    width: 40%;
    display: flex;
    letter-spacing: 3px;
    text-transform: uppercase;
    justify-content: space-between;
    & input {
      width: 92px;
      border: none;
      border-bottom: 1px solid gray;
      text-align: center;
      letter-spacing: 2px;
    }
    & p {
      display: flex;
      margin: 0;
      align-items: center;
    }
  }
`;

const PostBtn = styled.div`
  margin: 0;
  margin-top: 5px;
  width: 100%;
  height: 100%;
  border: 1px solid orangered;
  display: flex;
  justify-content: flex-end;
  & button {
    margin: 5px 10px;
  }
`;
const PostMain = styled.div`
  margin: 0;
  padding: 10px;
  width: 60%;
  height: 100%;
  border: 1px solid orangered;
  & section {
    width: 100%;
    & h6 {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      letter-spacing: 3px;
      & p {
        width: 20%;
        margin: 0;
        text-align: right;
      }
      & .createAt {
        padding-left: 5%;
        width: 100%;
        text-align: left;
      }
      & input {
        width: 80%;
        padding: 10px;
        border: none;
        :focus {
          outline: none;
        }
      }
    }
  }
  & .postText {
    display: flex;
    flex-direction: column;
    align-items: center;
    & textarea {
      padding: 10px;
      width: 80%;
      height: 300px;
      :focus {
        outline: none;
      }
    }
  }
`;
