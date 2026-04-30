from PIL import Image
import numpy as np

# Open the logo image
img = Image.open("syncLabs logo.png").convert("RGBA")

# Get the corner pixels (assuming top-left is the background color)
corner_color = img.getpixel((0, 0))

# Convert to numpy array for processing
data = np.array(img)

# Get the corner color components
r, g, b, a = corner_color

# Create a mask for pixels that match the corner color (within tolerance)
# Using a tolerance to handle slight color variations
tolerance = 30
mask = (
    (np.abs(data[:, :, 0] - r) <= tolerance) &
    (np.abs(data[:, :, 1] - g) <= tolerance) &
    (np.abs(data[:, :, 2] - b) <= tolerance)
)

# Set alpha to 0 for background pixels
data[:, :, 3] = np.where(mask, 0, data[:, :, 3])

# Create new image with transparent background
result = Image.fromarray(data, mode="RGBA")

# Save as PNG with transparency
result.save("public/syncLabs-logo.png", "PNG")

print("Background removed successfully!")
