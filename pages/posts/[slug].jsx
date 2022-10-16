import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Form, Button } from "react-bootstrap";
import { client } from "../../client";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

export default function Post({ posts, categories }) {
  const router = useRouter();
  const slug = router.query.slug;
  const [searchVal, setSearchVal] = useState("");
  const [category, setCategory] = useState("All Posts");

  return (
    <Container
      fluid
      className="p-0"
      style={{ width: "100%", height: "100vh", background: "#E6E6FA" }}
    >
      <Container
        fluid
        style={{
          width: "100%",
          height: "45px",
          background: "#fff",
          color: "#000",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          padding: "1px 10px 1px 10px",
        }}
        className="d-flex flex-row align-items-center "
      >
        <div className="p-0">
          <h3
            style={{
              marginBottom: "0px",
              fontFamily: "Roboto",
              whiteSpace: "nowrap",
            }}
          >
            Erised Writings
          </h3>
        </div>
        <Container
          fluid
          className="d-flex flex-row align-items-center justify-content-end p-0"
        >
          <div
            style={{
              marginRight: "20px",
              marginLeft: "8px",
              fontFamily: "Segoe UI",
              paddingBottom: "2px",
            }}
            className="d-flex flex-row align-items-center justify-content-end"
          >
            <div>
              <ImSearch />
            </div>
            <div>
              <Form>
                <Form.Group>
                  <Form.Control
                    type="text"
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                    placeholder="Search..."
                    style={{
                      width: "100px",
                      marginLeft: "10px",
                      border: "solid",
                      padding: "1px",
                      borderWidth: "0px 0px 2px 0px",
                      borderRadius: "3px",
                    }}
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
          <div
            style={{
              marginRight: "8px",
              marginLeft: "8px",
              fontFamily: "Segoe UI",
              paddingBottom: "2px",
            }}
          >
            <Link href="/">
              <div>
                {" "}
                <h6 style={{ marginBottom: "0px", color: "#555" }}>Home</h6>
              </div>
            </Link>
          </div>{" "}
          <div
            style={{
              marginRight: "8px",
              marginLeft: "8px",
              fontFamily: "Segoe UI",
            }}
          >
            <Link href="/posts">
              <div>
                {" "}
                <h6
                  style={{
                    marginBottom: "0px",
                    color: "#000",
                    border: "solid",
                    borderWidth: "0px 0px 2px 0px",
                  }}
                >
                  Posts
                </h6>
              </div>
            </Link>
          </div>{" "}
          <div
            style={{
              marginRight: "8px",
              marginLeft: "8px",
              fontFamily: "Segoe UI",
            }}
          >
            <Link href="/writeToME">
              <div>
                {" "}
                <h6
                  style={{
                    marginBottom: "0px",
                    color: "#555",
                    whiteSpace: "nowrap",
                  }}
                >
                  Write To ME!
                </h6>
              </div>
            </Link>
          </div>{" "}
          <div
            style={{
              marginRight: "8px",
              marginLeft: "8px",
              fontFamily: "Segoe UI",
              background: "#000",
              borderRadius: "10px",
              color: "#fff",
              padding: "5px 8px 5px 8px",
            }}
          >
            <Link href="/signup">
              <div>
                {" "}
                <h6 style={{ marginBottom: "0px" }}>Join</h6>
              </div>
            </Link>
          </div>{" "}
        </Container>
      </Container>
      <Container fluid className="p-4">
        <div
          className=" d-flex flex-row justify-content-start"
          style={{
            background: "#fff",
            border: "none",
            borderRadius: "10px",
            height: "45px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            overflowX: "auto",
            whiteSpace: "nowrap",
            padding: "0px 15px 0px 15px",
          }}
        >
          <Scrollbars
            style={{
              width: "100%",
              height: "45px",
              paddingBottom: "5px",
            }}
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
          >
            <Button
              style={{
                background: "transparent",
                border: "none",
                color: "#000",
                padding: "0px",
              }}
              onClick={() => {
                if (category !== "All Posts") {
                  setCategory("All Posts");
                }
              }}
            >
              <div className="d-flex flex-column align-items-center justify-content-center">
                {category === "All Posts" ? (
                  <div
                    style={{
                      width: "90%",
                      height: "5px",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      background: "#734F96",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "95%",
                      height: "5px",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      background: "rgb(255, 255, 255)",
                    }}
                  />
                )}
                <div style={{ margin: "10px 10px 0px 10px" }}>
                  <h6 style={{ marginBottom: "0px" }}>All Posts</h6>
                </div>
              </div>
            </Button>

            {categories?.map((val, key) => {
              if (val.title !== "Undefined")
                return (
                  <Button
                    key={key}
                    style={{
                      padding: "0px",
                      background: "transparent",
                      border: "none",
                      color: "#000",
                    }}
                    onClick={() => {
                      if (category !== val.title) {
                        setCategory(val.title);
                      }
                    }}
                  >
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      {category === val.title ? (
                        <div
                          style={{
                            width: "95%",
                            height: "5px",
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px",
                            background: "#734F96",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "90%",
                            height: "5px",
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px",
                            background: "#fff",
                          }}
                        />
                      )}
                      <div style={{ margin: "10px 10px 0px 10px" }}>
                        <h6 style={{ marginBottom: "0px" }}>{val.title}</h6>
                      </div>
                    </div>
                  </Button>
                );
            })}
          </Scrollbars>
        </div>
      </Container>
    </Container>
  );
}

export const getServerSideProps = async () => {
  const postQuery = '*[_type=="post"]';
  const posts = await client.fetch(postQuery);

  const categoryQuery = '*[_type=="category"]';
  const categories = await client.fetch(categoryQuery);

  return {
    props: {
      posts,
      categories,
    },
  };
};
