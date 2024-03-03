const Preview = ({ children,selectedDevice }) => {
  console.log(selectedDevice)
  return <div style={{transition: '0.3s ease 0s', maxWidth: `${selectedDevice}`}} className={` w-full border p-5 ${selectedDevice} mx-auto `}>{children}</div>;
};

export default Preview;
