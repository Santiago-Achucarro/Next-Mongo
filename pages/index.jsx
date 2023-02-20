import { Layout } from "@/custom/Layout";
import dbConnect from "../database/dbConnect";
import User from "../database/models/usersSchema";
import Post from "../database/models/postSchema";
import { Box, Container } from "@mui/material";
import { capitalizeWords, convertObjData } from "@/custom/CustomFunctions";
import { BoxTextArea } from "@/custom/CustomStyles";

export default function Home({ user, posts }) {
  function allData() {
    const userPosts = user.reduce((acc, curr) => {
      acc[curr.userName] = {
        _id: curr._id,
        post: [],
      };
      return acc;
    }, {});

    posts.forEach((post) => {
      if (Object.keys(userPosts).some((x) => x === post.userName)) {
        userPosts[post.userName].post.push(post);
      }
    });

    const data = Object.keys(userPosts).map((userName) => {
      return {
        userName,
        _id: userPosts[userName]._id,
        posts: userPosts[userName],
      };
    });
    return data;
  }

  const Data = allData();

  return (
    <>
      <Layout title={"Next-mongodb"}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
          maxWidth
        >
          {Data.map((item) => {
            return (
              <Box
                key={item._id}
                sx={{
                  width: "100%",
                  backgroundColor: "blue",
                  mt: "5px",
                }}
              >
                <h1>{capitalizeWords(item.userName)}</h1>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item.posts.post.map((post, index) => {
                    return (
                      <BoxTextArea
                        key={`${item.posts._id} ${index}`}
                        value={post.content}
                      />
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Container>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    await dbConnect();
    const resUser = await User.find({});
    const resPost = await Post.find({});
    const user = convertObjData(resUser);
    const posts = convertObjData(resPost);
    return { props: { user, posts } };
  } catch (error) {
    console.log(error);
    return { props: { user: "Error" } };
  }
}
