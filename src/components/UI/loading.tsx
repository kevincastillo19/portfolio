const Loading = () => {
    const rotationKeyframes = `
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `
    return (
        <>
            <style>{rotationKeyframes}</style>
            <div
                style={{                   
                    borderRight: '5px solid gray',
                    borderBottom: '5px solid gray',
                    borderLeft: '5px solid gray',
                    borderTop: '5px solid #D61E2B',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    position:'absolute',
                    content:'',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    animation: 'rotation 1.5s linear infinite',
                }}
            />
        </>
    )
}

export default Loading
