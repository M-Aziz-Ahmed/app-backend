import dns from 'dns'

console.log('Testing DNS resolution...')

dns.resolve('app.ipk7p3c.mongodb.net', (err, addresses) => {
  if (err) {
    console.error('❌ DNS Resolution Failed:', err.message)
    console.log('\n🔧 Possible solutions:')
    console.log('1. Check your internet connection')
    console.log('2. Try using Google DNS (8.8.8.8)')
    console.log('3. Disable VPN if active')
    console.log('4. Check firewall/antivirus settings')
    console.log('5. Use a different network')
  } else {
    console.log('✅ DNS Resolution Successful:', addresses)
  }
})
