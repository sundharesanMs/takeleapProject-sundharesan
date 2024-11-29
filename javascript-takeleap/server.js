
const fetchUserData = async () => {
    return { id: 1, name: 'John Doe' };
};

const getUserData = async () => {
    try {
        const data = await fetchUserData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

getUserData();
