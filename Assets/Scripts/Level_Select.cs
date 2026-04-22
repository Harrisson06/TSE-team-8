using UnityEngine;

public class Level_Select : MonoBehaviour
{
    // This script is attached to the level select buttons in the game. It allows the player to select a level and load it.
    
    // Load the testQR image from Assets/Resources/testQR.png
    public Texture2D testQR;

    // Ask permission to open camera (if on computer)
    void Awake()
    {
        // Check if the user has granted permission to access the camera
        if (!Application.HasUserAuthorization(UserAuthorization.WebCam))
        {
            // If not, request permission
            Application.RequestUserAuthorization(UserAuthorization.WebCam);
        }
    }

    // Open the camera to scan a QR code
    public void OpenCamera()
    {
        // Check if the user has granted permission to access the camera
        if (Application.HasUserAuthorization(UserAuthorization.WebCam))
        {
            // If so, open the camera
            WebCamTexture webcamTexture = new WebCamTexture();
            webcamTexture.Play();

            // Also open mobile camera if on mobile
#if UNITY_IOS || UNITY_ANDROID
            Handheld.StartActivityIndicator();
            Handheld.StopActivityIndicator();
            Handheld.OpenURL("camera://");
#endif
        }
        else
        {
            // If not, display a message to the user
            Debug.Log("Camera access is required to scan QR codes.");
        }
    }

    // If scan matches the test QR code, load the level
    public void LoadLevel(string qrCode)
    {
        if (qrCode == "testQR")
        {
            // Load the level associated with the test QR code
            Debug.Log("Loading level associated with test QR code...");
            // Load the level here using SceneManager.LoadScene or similar method
            // SceneManager.LoadScene("LevelName");

            // In this case we will just log a message to the console
            Debug.Log("Level loaded successfully!");
        }
        else
        {
            Debug.Log("QR code does not match any levels.");
        }
    }

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}