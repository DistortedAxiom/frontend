import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Option = styled.option`
  color: blue;
  background-color: rgb(232, 240, 254);
  border-color: lightblue;
  height: 100px;
`;
const Select = styled.select`
  color: Grey;
  background-color: rgb(232, 240, 254);
  border-color: lightblue;
  height: 40px;
`;

const InputTitle = styled.input`
  display: block;
  width: 50%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0 auto;
`;

const InputTextArea = styled.textarea`
  display: block;
  width: 50%;
  height: 150px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0 auto;
`;
const InputZip = styled.input`
  display: block;
  width: 15%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0 auto;
`;

function PostForm({
  values,
  inputChange,
  Submiting,
  errors,
  post,
  disabled,
  add,
}) {
  const posts = JSON.parse(localStorage.getItem("post"));

  const [searchTerm, setSearchTerm] = useState("");

  const [result, setResult] = useState([...posts]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    setResult(
      post.filter((item) => {
        return item.post_zip.includes(searchTerm);
      })
    );
  };

  // console.log(post);
  // useEffect(() => {

  // }, [searchTerm]);

  console.log(result);

  return (
    <Form onSubmit={Submiting}>
      <label>
        <Form.Label>Category: </Form.Label>
        <Select
          name="post_category"
          onChange={inputChange}
          value={values.post_category}
        >
          <Option> Select Category </Option>
          <Option value="1"> Maintenance </Option>
          <Option value="2"> Saftey </Option>
          <Option value="3"> Complaints </Option>
          <Option value="4"> Suggestions </Option>
          <Option value="5"> Budget </Option>
          <Option value="6"> Beautification </Option>
          <Option value="7"> Lost / Missing </Option>
        </Select>
        <p> {errors.category} </p>
      </label>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <InputTitle
          name="post_title"
          type="text"
          placeholder="Insert Title here!"
          onChange={inputChange}
          value={values.post_title}
        />
        <p> {errors.post_title} </p>
      </Form.Group>
      <Form.Group>
        <Form.Label>Concern</Form.Label>
        <InputTextArea
          name="post_text"
          placeholder="Enter your concern here!"
          onChange={inputChange}
          value={values.post_text}
        />
        <p> {errors.post_text} </p>
      </Form.Group>

      <Form.Group>
        <Form.Label>Zip Code</Form.Label>
        <InputZip
          name="post_zip"
          type="text"
          placeholder="Zip Code"
          onChange={inputChange}
          value={values.post_zip}
        />
        <p> {errors.post_zip} </p>
      </Form.Group>

      <label>
        <Button type="submit" disabled={disabled}>
          {" "}
          Submit Comment{" "}
        </Button>
      </label>
      <br />
      <input
        type="text"
        placeholder="Search zip codes"
        value={searchTerm}
        onChange={handleChange}
      />

      <div>
        {result &&
          result.map((item) => {
            return (
              <>
              <Link to={`/posts/${item.post_id}`}> Edit </Link>
              <PostCard
                id={item.post_id}
                title={item.post_title}
                zip={item.post_zip}
                category={item.post_category}
                text={item.post_text}
                upvotes={item.post_upvotes}
                add={add}
              />
              </>
            );
          })}
        {" "}
        {post.map((item) => {
          return (
            <PostCard
              title={item.post_title}
              zip={item.post_zip}
              category={item.post_category}
              text={item.post_text}
            />
          );
        })}
      </div>
    </Form>
  );
}

export default PostForm;
