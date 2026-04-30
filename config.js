const globalAdCode = `
    <div style="margin: 25px 0; text-align: center;"> 
        <p style="color: #999; font-size: 10px; margin-bottom: 5px;">ADVERTISEMENT</p>
        <div style="background: #fafafa; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
            <h4 style="color: #666; margin: 0;">বিজ্ঞাপন এখানে প্রদর্শিত হবে</h4>
        </div>
    </div>
`;
function loadAds() {
    document.querySelectorAll('.ad-slot').forEach(slot => {
        slot.innerHTML = globalAdCode;
    });
}
window.addEventListener('load', loadAds);