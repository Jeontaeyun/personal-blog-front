import React, { useState, useCallback, useRef, useEffect } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import styled from "styled-components";

interface IProps {}

const AdminPage: React.FC<IProps> = props => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const editorRef = useRef<Editor>(null);

    const _onBoldClick = useCallback(() => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
    }, [editorState, RichUtils]);

    const handleKeyCommand = useCallback((command, state) => {
        const newState = RichUtils.handleKeyCommand(state, command);
        if (newState) {
            setEditorState(newState);
            return "handled";
        }
        return "not-handled";
    }, []);

    const logState = useCallback(() => {
        console.log(editorState.toJS());
    }, [editorState]);

    useEffect(() => {}, []);

    return (
        <>
            <Container>
                <Button onClick={_onBoldClick}>B</Button>
                <EditorContainer>
                    <Editor
                        ref={editorRef}
                        editorState={editorState}
                        handleKeyCommand={handleKeyCommand}
                        onChange={setEditorState}
                    />
                    <input onClick={logState} value="Log State" type={"button"} />
                </EditorContainer>
            </Container>
        </>
    );
};

AdminPage.defaultProps = {};

const Container = styled.div`
    width: 500px;
    height: 500px;
    background: white;
    border: 1px solid #dee2e6;
`;

const EditorContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;
`;

const Button = styled.button`
    font-size: 1rem;
    font-weight: 900;
    border: none;
    background-color: grey;
`;

export default AdminPage;
