import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const JSXCode = ({ stringCode }) => {
  return (
    <SyntaxHighlighter
      customStyle={{
        backgroundColor: "#00212B",
        margin: "0px",
      }}
      language="jsx"
      style={dracula}
    >
      {stringCode}
    </SyntaxHighlighter>
  );
};

export default JSXCode;
