export const handleGoogleLogin = async () => {
    // window.location.href = `${process.env.NEXT_PUBLIC_ADONIS_API_URL}/google/redirect`;

    try {
        const accessToken = 'veg_NA.TTlVTzdfZmFPRzE3WUw1cDhHWXlYZmxQdG1QMklwT2thTmlQNGdfYzMyODYzNzUxNTM';
        const tokens = await fetch(`${process.env.NEXT_PUBLIC_ADONIS_API_URL}/google/redirect`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
        });
    } catch (error) {}
};
