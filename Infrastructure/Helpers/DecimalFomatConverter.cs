using System.Text.Json;
using System.Text.Json.Serialization;

namespace Infrastructure.Helpers
{
    public class DecimalFomatConverter
    {
        public class DecimalFormatConverter : JsonConverter<decimal>
        {
            public override decimal Read(
                ref Utf8JsonReader reader,
                Type typeToConvert,
                JsonSerializerOptions options
            )
            {
                if (reader.TokenType != JsonTokenType.Number)
                {
                    throw new JsonException($"Unexpected token type: {reader.TokenType}");
                }

                return reader.GetDecimal();
            }

            public override void Write(
                Utf8JsonWriter writer,
                decimal value,
                JsonSerializerOptions options
            )
            {
                writer.WriteNumberValue(Math.Round(value, 2));
            }
        }
    }
}