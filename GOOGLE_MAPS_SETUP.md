# Google Maps Setup Guide

This guide will help you set up Google Maps for your jewellery shop contact page.

## Step 1: Get a Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - **Maps JavaScript API** (required)
   - **Places API** (optional, for enhanced features)
4. Go to "Credentials" and create an API key
5. **Important**: Restrict the API key to your domain for security

## Step 2: Configure Environment Variables

1. Create a `.env.local` file in your project root (same level as package.json)
2. Add your Google Maps API key:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

**Example:**
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Step 3: Update Shop Location (Optional)

The current map is set to Kolhapur, India coordinates. To change the location:

1. Open `app/contact/ContactPageClient.tsx`
2. Find the GoogleMaps component
3. Update the `latitude` and `longitude` props with your shop's coordinates:

```tsx
<GoogleMaps
  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE'}
  latitude={YOUR_SHOP_LATITUDE}  // Replace with your shop's latitude
  longitude={YOUR_SHOP_LONGITUDE} // Replace with your shop's longitude
  zoom={15}
  title="Your Shop Name"
/>
```

## Step 4: Restart Development Server

After creating the `.env.local` file, restart your development server:

```bash
npm run dev
```

## Features

- ✅ Interactive Google Maps with custom marker
- ✅ Shop location marker with custom styling
- ✅ Info window with shop details
- ✅ **NEW**: "Get Directions" button in info window
- ✅ **NEW**: "Get Directions" button in contact details
- ✅ Responsive design
- ✅ Fallback display when API key is not configured
- ✅ Navigation to Google Maps directions page

## How to Get Coordinates

1. Go to [Google Maps](https://maps.google.com)
2. Search for your shop location
3. Right-click on the exact location
4. Select the coordinates that appear at the top
5. Copy the latitude and longitude values

## Security Notes

- Always restrict your API key to your domain
- Never commit your API key to version control
- Use environment variables for sensitive data
- Consider implementing API key rotation for production

## Troubleshooting

### Map shows "Please add your Google Maps API key"
1. Check if `.env.local` file exists in project root
2. Verify the environment variable name: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
3. Make sure there are no spaces around the `=` sign
4. Restart the development server after creating the file

### API key error in browser console
1. Ensure the Maps JavaScript API is enabled in Google Cloud Console
2. Check if your API key has the correct permissions
3. Verify domain restrictions are set correctly

### CORS issues
1. Make sure your domain is added to the API key restrictions
2. For development, add `localhost` to allowed domains
3. For production, add your actual domain

### Directions button not working
1. Check if the coordinates are correct
2. Verify the Google Maps URL format
3. Test the URL directly in browser

## Current Configuration

- **Location**: Kolhapur, Maharashtra, India
- **Coordinates**: 16.696228208520868, 74.22313951086511
- **Shop Name**: Oswal Alankar Jewellery
- **Address**: Shop No 43 C Ward, Gujari Rd, near by H F Jewellers, Bazar, Kolhapur, Maharashtra 416002

## Testing

1. Visit `/contact` page
2. Click on the map marker to see info window
3. Click "Get Directions" button to open Google Maps
4. Test the "Get Directions" button in contact details section 