import { useState, useEffect } from 'react';

function getUser() {
    return Promise.resolve({ id: '1', name: 'Robin' });
  }

function AsyncHelloWorld() {
	const [search, setSearch] = useState('');
	const [user, setUser] = useState(null);

	function handleChange(event) {
		setSearch(event.target.value);
	}

    useEffect(() => {
        const loadUser = async () => {
          const user = await getUser();
          setUser(user);
        };
    
        loadUser();
      }, []);

	return (
		<div>
			{user ? <p>Signed in as {user.name}</p> : null}
			<Search value={search} onChange={handleChange}>
				Search:
			</Search>

			<p>Searches for {search ? search : '...'}</p>
		</div>
	);

	function Search({ value, onChange, children }) {
		return (
			<div>
				<label htmlFor="search">{children}</label>
				<input data-testid="search" type="text" value={value} onChange={onChange} />
                <p>Searches for {search ? search : '...'}</p>
			</div>
		);
	}
}

export default AsyncHelloWorld;