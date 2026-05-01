// হোমপেজের বিজ্ঞাপন কন্ট্রোল
document.addEventListener("DOMContentLoaded", function() {
    const homeConfig = {
        topAd: "আমাদের ভিপিএন ব্যবহার করে নিরাপদ থাকুন।",
        bottomAd: "যেকোনো সমস্যার জন্য আমাদের সাপোর্ট টিমে নক দিন।"
    };

    document.querySelector('.ad-top-text').innerText = homeConfig.topAd;
    document.querySelector('.ad-bottom-text').innerText = homeConfig.bottomAd;
});


const vpnConfig = {
    topAdText: "CK Tunnel VIP: দুবাই ও সৌদি প্রবাসীদের প্রথম পছন্দ!",
    bottomAdText: "যেকোনো সমস্যায় আমাদের টেলিগ্রাম চ্যানেলে নক দিন।",

    // এখানে তুমি ১টি থেকে ৪টি বা তার বেশি অ্যাপ রাখতে পারবে
    apps: [
        { name: "CK Tunnel VIP", logo: "../ck-logo.png", link: "#" },
        { name: "CK Tunnel Lite", logo: "../ck-logo.png", link: "#" },
        { name: "CK Tunnel Pro", logo: "../ck-logo.png", link: "#" },
        { name: "CK Tunnel Plus", logo: "../ck-logo.png", link: "#" }
    ]
};

window.onload = function() {
    // অ্যাড টেক্সট বসানো
    document.querySelectorAll('.ad-top-text').forEach(el => el.innerText = vpnConfig.topAdText);
    document.querySelectorAll('.ad-bottom-text').forEach(el => el.innerText = vpnConfig.bottomAdText);
    
    // ডাইনামিক গ্রিড তৈরি
    const grid = document.getElementById('vpnGrid');
    if(grid) {
        grid.innerHTML = vpnConfig.apps.map(app => `
            <div class="vpn-item">
                <img src="${app.logo}" alt="${app.name}" onerror="this.src='https://via.placeholder.com/65?text=CK'">
                <h4>${app.name}</h4>
                <a href="${app.link}" class="btn-grid">ইন্সটল</a>
            </div>
        `).join('');
    }
};




const vpnConfig = {
    topAdText: "CK Tunnel VIP - সুপার ফাস্ট কানেকশন!",
    bottomAdText: "যেকোনো সমস্যায় আমাদের টেলিগ্রাম গ্রুপে জানান।",

    // ৪টি ভিপিএন এর তথ্য (লোগো > নাম > বাটন)
    apps: [
        { name: "CK Tunnel VIP", logo: "../ck-logo.png", link: "#" },
        { name: "CK Tunnel Lite", logo: "../ck-logo.png", link: "#" },
        { name: "CK Tunnel Pro", logo: "../ck-logo.png", link: "#" },
        { name: "CK Tunnel Plus", logo: "../ck-logo.png", link: "#" }
    ]
};

window.onload = function() {
    // অ্যাড টেক্সট আপডেট
    document.querySelectorAll('.ad-top-text').forEach(el => el.innerText = vpnConfig.topAdText);
    document.querySelectorAll('.ad-bottom-text').forEach(el => el.innerText = vpnConfig.bottomAdText);
    
    // ভিপিএন লিস্ট তৈরি
    const listContainer = document.getElementById('vpnListContainer');
    if(listContainer) {
        listContainer.innerHTML = vpnConfig.apps.map(app => `
            <div class="vpn-card-new">
                <img src="${app.logo}" alt="${app.name}" onerror="this.src='https://via.placeholder.com/60?text=CK'">
                <div class="vpn-details">
                    <h3>${app.name}</h3>
                </div>
                <a href="${app.link}" class="btn-download">ইন্সটল</a>
            </div>
        `).join('');
    }
};