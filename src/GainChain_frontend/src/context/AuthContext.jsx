const checkAuthUser = async () => {
  setIsLoading(true);
  try {
    // Simulate API call with mock data
    const useMockData = true; // Set this to false to switch to API
    if (useMockData) {
      setUser(MOCK_USER);
      setIsAuthenticated(true);
      return true;
    }

    // Original API call
    const currentAccount = await getCurrentUserFromCanister(); // Use your custom function here
    if (currentAccount) {
      setUser({
        id: currentAccount.id,
        name: currentAccount.name,
        username: currentAccount.username,
        email: currentAccount.email,
        imageUrl: currentAccount.imageUrl,
        bio: currentAccount.bio,
      });
      setIsAuthenticated(true);
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  } finally {
    setIsLoading(false);
  }
};
