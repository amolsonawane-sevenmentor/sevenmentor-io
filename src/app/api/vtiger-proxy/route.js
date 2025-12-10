export const dynamic = "force-dynamic" // Ensure this route is dynamic

export async function POST(request) {
  try {
    const formData = await request.formData()

    // Forward to Vtiger
    const vtigerResponse = await fetch("https://sevenmentor34.od2.vtiger.com/modules/Webforms/capture.php", {
      method: "POST",
      body: formData,
      // Important: Do not set 'Content-Type' header here.
      // fetch will automatically set it to 'multipart/form-data' with the correct boundary
      // when a FormData object is provided as the body.
    })

    // Vtiger often responds with a 302 redirect on success.
    // Check if the response was OK (2xx) or if it was a redirect.
    if (!vtigerResponse.ok && !vtigerResponse.redirected) {
      // If it's neither OK nor redirected, it's a genuine failure from Vtiger's side.
      // You might want to read the response body for more details if Vtiger provides them.
      const errorText = await vtigerResponse.text() // Try to get error details from Vtiger
      console.error("Vtiger submission failed with status:", vtigerResponse.status, "Response:", errorText)
      throw new Error(`Vtiger submission failed: ${vtigerResponse.status} - ${errorText.substring(0, 100)}...`)
    }

    // If Vtiger responded with 2xx or 3xx (redirected), consider it a success.
    return Response.json({ success: true })
  } catch (error) {
    console.error("Proxy error:", error)
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
