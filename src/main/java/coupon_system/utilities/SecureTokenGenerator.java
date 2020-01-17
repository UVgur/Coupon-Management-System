package coupon_system.utilities;

import java.security.SecureRandom;

public class SecureTokenGenerator {
    private static final String CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    private static final int SECURE_TOKEN_LENGTH = 255;

    private static final SecureRandom random = new SecureRandom();

    private static final char[] symbols = CHARACTERS.toCharArray();

    private static final char[] buf = new char[SECURE_TOKEN_LENGTH];

    /**
     * Generate the next secure random token in the series.
     */
    public static String nextToken() {
        for (int i = 0; i < buf.length; ++i)
            buf[i] = symbols[random.nextInt(symbols.length)];
        return new String(buf);
    }
}
