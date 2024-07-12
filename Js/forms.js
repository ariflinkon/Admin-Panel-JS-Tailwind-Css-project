// forms.js

function loadLoginForm() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <div class="flex justify-center mb-4">
                <img src="logo.png" alt="Logo" class="h-12 w-12">
            </div>
            <h2 class="text-2xl font-bold text-center mb-6">Sign in to your account</h2>
            <form>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700">Email</label>
                    <input type="email" id="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-700">Password</label>
                    <input type="password" id="password" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Sign in</button>
            </form>
            <div class="flex justify-between items-center mt-4">
                <a href="#" class="text-sm text-blue-500 hover:underline">Forgot your password?</a>
                <a href="#" id="register-link" class="text-sm text-blue-500 hover:underline">Don't have an account? Sign up</a>
            </div>
            <div class="mt-6 text-center">
                <p class="text-gray-600">Or continue with</p>
                <div class="flex justify-center mt-2">
                    <button class="bg-red-500 text-white px-4 py-2 rounded-lg mr-2">Google</button>
                    <button class="bg-blue-700 text-white px-4 py-2 rounded-lg">Facebook</button>
                </div>
            </div>
            <div class="mt-4 text-center">
                <a href="#" class="text-sm text-gray-600 hover:underline">Terms and Conditions</a>
            </div>
        </div>
    `;
}

function loadRegisterForm() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <div class="flex justify-center mb-4">
                <img src="logo.png" alt="Logo" class="h-12 w-12">
            </div>
            <h2 class="text-2xl font-bold text-center mb-6">Sign up your account</h2>
            <form>
                <div class="mb-4">
                    <label for="name" class="block text-gray-700">Name</label>
                    <input type="text" id="name" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700">Email</label>
                    <input type="email" id="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-700">Password</label>
                    <input type="password" id="password" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Sign up</button>
            </form>
            <div class="flex justify-between items-center mt-4">
                <a href="#" id="login-link" class="text-sm text-blue-500 hover:underline">Already have an account? Sign in</a>
            </div>
            <div class="mt-6 text-center">
                <p class="text-gray-600">Or continue with</p>
                <div class="flex justify-center mt-2">
                    <button class="bg-red-500 text-white px-4 py-2 rounded-lg mr-2">Google</button>
                    <button class="bg-blue-700 text-white px-4 py-2 rounded-lg">Facebook</button>
                </div>
            </div>
            <div class="mt-4 text-center">
                <a href="#" class="text-sm text-gray-600 hover:underline">Terms and Conditions</a>
            </div>
        </div>
    `;
}