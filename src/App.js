import React, {useState, useRef} from "react";
import './styles/App.css';
import PostList from "./component/PostList";
import MyButton from "./component/UI/button/MyButton";
import MyInput from "./component/UI/input/MyInput";

const App = () => {
	const [posts, setPosts] = useState([
		{id: 1, title: 'Javascript', body: 'Description'},
		{id: 2, title: 'Javascript 2', body: 'Description'},
		{id: 3, title: 'Javascript 3', body: 'Description'},
	]);
	const [title, setTitle] = useState('');
	const bodyInputFef = useRef();
	const addNewPost = (e) => {
		e.preventDefault()
		console.log(title)
		console.log(bodyInputFef.current.value)
	}
	
	// комментарий создан на ноутбуке
	return (
		<div className="App">
			<form>
				{/*Управляемый компонент*/}
				<MyInput
					value={title}
					onChange={e => setTitle(e.target.value)}
					type="text"
					placeholder="Название поста"/>
				{/*Неуправляемый компонент*/}
				<MyInput
				ref={bodyInputFef}
					type="text"
					placeholder="Описание поста"
				/>
				<MyButton onClick={addNewPost}>Создать пост</MyButton>
			</form>
			<PostList posts={posts} title={"Посты по JS"}/>
		</div>
	);
};

export default App;
