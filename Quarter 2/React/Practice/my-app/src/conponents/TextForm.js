export default function TextForm(props) {
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myTextBox" rows="8"></textarea>
            </div>
        </>
    );
}