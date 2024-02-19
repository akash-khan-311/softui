import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const JSXCode = ({ stringCode }) => {
  return (
    <SyntaxHighlighter language="jsx" style={oneDark}>
      {stringCode}
    </SyntaxHighlighter>
  );
};

export default JSXCode;
