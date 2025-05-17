<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Website Pembayaran</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
  <style>
    body {
      background: linear-gradient(135deg, #1e3c72, #2a5298);
      background-size: cover;
      background-attachment: fixed;
      overflow-x: hidden;
    }
    .snowflake {
      position: fixed;
      top: -10px;
      color: #fff;
      user-select: none;
      z-index: 9999;
      animation: fall linear infinite;
    }
    @keyframes fall {
      0% {transform: translateY(0) rotate(0deg); opacity: 1;}
      100% {transform: translateY(100vh) rotate(360deg); opacity: 0;}
    }
  </style>
</head>
<body class="text-white font-sans relative">

  <!-- Efek salju -->
  <script>
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
      snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
      snowflake.innerText = "❄";
      document.body.appendChild(snowflake);
    }
  </script>

  <div class="max-w-xl mx-auto mt-10 bg-white/90 backdrop-blur-md text-gray-900 rounded-2xl shadow-2xl p-6 relative z-10">
    <h1 class="text-3xl font-bold mb-6 text-center text-blue-600">Website Pembayaran</h1>

    <div class="flex justify-around mb-6">
      <button onclick="showSection('payment')" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">Payment</button>
      <button onclick="showSection('testimoni')" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full">Testimoni</button>
      <button onclick="showSection('owner')" class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full">Owner</button>
    </div>

    <!-- Section: Payment -->
    <div id="payment" class="hidden">
      <h2 class="text-xl font-semibold mb-4">Metode Pembayaran</h2>
      <div class="space-y-5">
        <!-- QRIS -->
        <div class="flex items-center gap-4">
          <i class="fas fa-qrcode text-2xl text-blue-600"></i>
          <div>
            <p class="font-medium">QRIS</p>
            <img src="https://files.catbox.moe/blxbka.jpg" alt="QRIS" class="w-40 border rounded" />
          </div>
        </div>

        <!-- Dana -->
        <div class="flex items-center justify-between bg-gray-100 p-3 rounded">
          <div class="flex items-center gap-3">
            <img src="https://files.catbox.moe/osdol5.jpeg" alt="Dana" class="w-6 h-6">
            <span class="font-medium text-gray-800">Dana: 087796475936</span>
          </div>
          <button onclick="copyText('087796475936')" class="text-blue-600 hover:underline">Salin</button>
        </div>

        <!-- GoPay -->
        <div class="flex items-center justify-between bg-gray-100 p-3 rounded">
          <div class="flex items-center gap-3">
            <img src="https://files.catbox.moe/c6a4ee.jpeg" alt="GoPay" class="w-6 h-6">
            <span class="font-medium text-gray-800">GoPay: 087796475936</span>
          </div>
          <button onclick="copyText('087796475936')" class="text-blue-600 hover:underline">Salin</button>
        </div>

        <!-- Ovo -->
        <div class="flex items-center justify-between bg-gray-100 p-3 rounded">
          <div class="flex items-center gap-3">
            <img src="https://files.catbox.moe/1tpwq1.jpeg" alt="ShopeePay" class="w-6 h-6">
            <span class="font-medium text-gray-800">ovo: 087796475936</span>
          </div>
          <button onclick="copyText('087796475936')" class="text-blue-600 hover:underline">Salin</button>
        </div>
      </div>
    </div>

    <!-- Section: Testimoni -->
    <div id="testimoni" class="hidden mt-6">
      <h2 class="text-xl font-semibold mb-4">Testimoni</h2>
      <div class="space-y-3">
        <blockquote class="bg-gray-100 p-3 rounded border-l-4 border-blue-500 italic">
          "!"<br>https://whatsapp.com/channel/0029Vb7z40EHbFVARp3Xih36<span class="font-semibold">- ch testi</span>
        </blockquote>
        <blockquote class="bg-gray-100 p-3 rounded border-l-4 border-green-500 italic">
          "https://whatsapp.com/channel/0029Vb7z40EHbFVARp3Xih36"<br><span class="font-semibold">- ch owner</span>
        </blockquote>
      </div>
    </div>

    <!-- Section: Owner -->
    <div id="owner" class="hidden mt-6">
      <h2 class="text-xl font-semibold mb-4">Kontak Owner</h2>
      <p><span class="font-medium">Nama:</span> venzz</p>
      <p class="flex items-center gap-2 mt-2"><i class="fab fa-whatsapp text-green-500 text-xl"></i><a href="https://wa.me/6287796475936" class="text-blue-600 underline">Chat WhatsApp venzz</a></p>
      <p><span class="font-medium">Email:</span> <a href="mailto: venzz@gmail.com" class="text-blue-600 underline">venzz@gmail.com</a></p>
    </div>
  </div>

  <script>
    function showSection(id) {
      document.querySelectorAll('#payment, #testimoni, #owner').forEach(sec => sec.classList.add('hidden'));
      document.getElementById(id).classList.remove('hidden');
    }

    function copyText(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert("Nomor disalin: " + text);
      });
    }
  </script>
</body>
</html
