import React, {useMemo, useState} from "react";
import './styles/App.css';
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import MySelect from "./component/UI/select/MySelect/MySelect";
import MyInput from "./component/UI/input/MyInput";

const App = () => {
	const [posts, setPosts] = useState([
		{id: 1, title: 'аа', body: 'бб'},
		{id: 2, title: 'гг', body: 'аа'},
		{id: 3, title: 'вв', body: 'яя'},
	]);
	const [selectedSort, setSelectedSort] = useState('');
	const [searchQuery, setSearchQuery] = useState('');
	
	function getSortedPosts() {
		
	
	}
	
	const sortedPosts = useMemo(() => {
		console.log("ОТРАБОТАЛА ФУНКЦИЯ СОРТЕД ПОСТС")
		if(selectedSort) {
			return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
		}
		return posts;
	}, [selectedSort, posts])
	
	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}
	
	// Получаем пост из дочернего компонента
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
		
	}
	
	const sortPosts = (sort) => {
		setSelectedSort(sort)
	}
	
	return (
		<div>
			<PostForm create={createPost}/>
			<hr style={{margin: '15px 0'}}/>
			<div>
				<MyInput
					placeholder="Поиск..."
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>
				<MySelect
					value={selectedSort}
					onChange={sortPosts}
					defaultValue="Сортировка"
					options={[
						{value: 'title', name: 'По названию'},
						{value: 'body', name: 'По описанию'},
					]}
				/>
			</div>
			{posts.length
				?
				<PostList remove={removePost} posts={sortedPosts} title={"Посты по JS"}/>
				:
				<h1 style={{textAlign: "center"}}>
					Посты не найдены!
				</h1>
				
			}
		</div>
	);
};

export default App;
